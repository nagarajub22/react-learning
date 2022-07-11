import './ContentPane.css';


function NoComponentFound() {
    return <p>No Component Found</p>;
}

function ContentPane(props) {

    const Lesson = props.lesson.component ?? NoComponentFound;

    return (
        <section>
            <Lesson/>
        </section>
    )
}

export default ContentPane;