import { useState } from 'react';

export default function RegisterForm() {

    const [form, setForm] = useState({
        firstName: 'Luke',
        lastName: 'Jones',
        email: 'lukeJones@sculpture.com',
    });

    return (
        <>
        <h1>Another example of useState Hook </h1>
        <p>The use of the spread operator is explained in ./components/spread_operator_with_objects.js</p>
            <label>
                First name:
                <input
                    value={form.firstName}
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Last name:
                <input
                    value={form.lastName}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Email:
                <input
                    value={form.email}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
        </>
    );
} 