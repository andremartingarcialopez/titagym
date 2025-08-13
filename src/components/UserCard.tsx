
type UserCardProps = {
    image: string,
    name: string,
    age: string,
    comment: string
}

export default function UserCard({ image, name, age, comment }: UserCardProps) {
    return (
        <div className="lg:w-100 shadow">
            <img className="rounded-t-2xl border border-yellow-400 shadow shadow-amber-400 " src={image} alt="Nuestro Gym" />
            <div className="bg-yellow-400 shadow shadow-amber-400 p-3 rounded-b-2xl">
                <h4 className="font-semibold px-3">{name}, {age}</h4>
                <p>{comment}</p>
            </div>
        </div>
    )
}
