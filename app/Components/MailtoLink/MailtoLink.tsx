type MailtoLinkProps = {
    email?: string,
    subject?: string,
    body?: string,
    className?: string,
    children?: React.ReactNode
}

export default function MailtoLink({email, subject = "", body = "", className, children}: MailtoLinkProps)  {
    const params = subject || body ? `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` : "";
    return (
        <a className={`${className}`} href={`mailto:${email}${params}`}>
            {children}
        </a>
    )
}
