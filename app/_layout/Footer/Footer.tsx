import React from 'react'

import styles from './Footer.module.css'
import Link from 'next/link'
const GetHelp = [
    {
        LinkText: "Contact Us",
        LinkTo: "/contact",
    }, {
        LinkText: "Blood Drives",
        LinkTo: "/blood-drives",
    }, {
        LinkText: "Eligibility & FAQs",
        LinkTo: "/eligibility-faqs",
    }, {
        LinkText: "Special Events",
        LinkTo: "/special-events",
    },
]

const Info = [
    {
        LinkText: "About",
        LinkTo: "/about",
    }, {
        LinkText: "Find a Blood Drive",
        LinkTo: "/find-blood-drive",
    }, {
        LinkText: "Careers",
        LinkTo: "/careers",
    }, {
        LinkText: "Donate Now",
        LinkTo: "/donate",
    },
]

const CustomerServices = [
    {
        LinkText: "My Account",
        LinkTo: "/my-account",
    }, {
        LinkText: "Volunteer Opportunities",
        LinkTo: "/volunteer",
    }, {
        LinkText: "Donor Benefits",
        LinkTo: "/donor-benefits",
    }, {
        LinkText: "Campaigns & Initiatives",
        LinkTo: "/campaigns",
    },
]


export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterRow}>
                <div>
                    <img src="/assets/logo.png" alt="" />
                </div>


                <div>
                    <h6>Get Help</h6>
                    {
                        GetHelp.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>


                <div>
                    <h6>Information</h6>
                    {
                        Info.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>


                <div>
                    <h6>Customer Services</h6>
                    {
                        CustomerServices.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>

            </div>


            <div className={styles.FooterRow1}>
                <p>Copyright © 2024. All Rights Reserved</p>
            </div>


        </footer>
    )
}
