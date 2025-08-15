
type FooterDetailsProps = {
    label: string,
    value: string
}

export default function FooterDetails({ label, value }: FooterDetailsProps) {
    return (
        <div>
            <p className="text-xl uppercase font-extrabold">{label}</p>
            <p className="font-base">{value}</p>
        </div>
    )
}
