import React, { useReducer, useState, useCallback } from 'react';
import type { CheckoutFormState } from '../../types/global.types';
import OrderSummary from '../../components/OrderSummary';
import { checkoutFormFields } from './CheckoutPage.config';
import InputField from '../../components/FormFields/InputField';
import { validateForm, validateField } from '../../utils/validators/formValidator';
import { initialState, formReducer } from './CheckoutPage.reducer';
import { useCustomContext } from '../../hooks/useCustomContext';
import { StorePurchaseContext } from '../../context/StorePurchaseContext';
import styles from './CheckoutPage.module.scss';

export default function CheckoutPage() {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { selectedItem, onSubmit, page } = useCustomContext(
    StorePurchaseContext,
    'StorePurchaseContext',
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'UPDATE',
      field: e.target.name,
      value: e.target.value,
    });
  }, []);

  const handleBlur = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error || '',
    }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const fullAddress = [form.address1, form.address2, form.city, form.pinCode]
      .filter(Boolean)
      .join(', ');

    onSubmit({
      ...form,
      address: fullAddress,
      orderNumber: `ORD-${Date.now()}`,
    });
    dispatch({ type: 'RESET' });
    setErrors({});
  };

  return (
    <div className={`container ${styles.wrapper}`}>
      <h1>Checkout</h1>
      <div>
        <h2>Good Choice!!</h2>
        <p>Now we just need some details from you.</p>
        <form name="checkoutForm" onSubmit={handleSubmit} noValidate>
          <div className={styles.form}>
            {checkoutFormFields.map((section) => (
              <fieldset key={section.legend}>
                <legend>{section.legend}</legend>
                {section.fields.map((field) => (
                  <InputField
                    key={field.name}
                    {...field}
                    value={form[field.name as keyof CheckoutFormState]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors[field.name]}
                  />
                ))}
              </fieldset>
            ))}
          </div>
          <OrderSummary selectedItem={selectedItem} page={page} />
          <button type="submit">Submit Order</button>
        </form>
      </div>
    </div>
  );
}
