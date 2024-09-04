"use client"
import React, { useState } from 'react'

import styles from './BookAppointment.module.css'

// for Components
import { InputBox, TextareaBox } from '@/Components/InputBox/InputBox'

export const BookAppointment = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const [successMessage, setSuccessMessage] = useState<string>("")

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        setName("")
        setEmail("")
        setMessage("")

        setSuccessMessage("We will get back to you soon!")

    }


    return (
        <div className={styles.BookAppointment}>
            <div>
                <img src="/assets/bookAppointment.png" loading='lazy' alt="" />
            </div>

            <div className={styles.FormWrapper}>
                <form onSubmit={handleSubmit}>
                    <h6>Book Appointment</h6>
                    <InputBox
                        Id='Name'
                        labelText='Your Name'
                        value={name}
                        InputType='text'
                        OnChange={(e) => setName(e.target.value)}
                    />
                    <InputBox
                        Id='email'
                        labelText='Your Email'
                        value={email}
                        InputType='email'
                        OnChange={(e) => setEmail(e.target.value)}
                    />

                    <TextareaBox
                        Id='message'
                        labelText='Your Message'
                        value={message}
                        OnChange={(e) => setMessage(e.target.value)}
                    />



                    <button type='submit'>Book Appointment</button>

                    {
                        successMessage && (
                            <p className={styles.SuccessMessage}>
                                {successMessage}
                            </p>
                        )
                    }

                </form>
            </div>

        </div>
    )
}
