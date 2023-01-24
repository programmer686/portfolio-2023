export default function ProjectCard({props}) {
    return (
        <div>
            <iframe src={props.link}></iframe>
            <p>{props.name}</p>
            <p>{props.stack}</p>
            <a href={props.github}>Guthub</a>
        </div>
    )
}