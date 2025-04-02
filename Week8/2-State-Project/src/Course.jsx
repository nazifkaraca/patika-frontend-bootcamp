import Nature from './images/nature1.jpeg';
import Mountain from './images/nature2.jpeg';
import Lake from './images/nature3.jpeg';
import River from './images/nature4.jpeg';

const courseMap = {
    Nature,
    Mountain,
    Lake,
    River,
}

function Course({courseName}) {

    return (  
        <div>
            <img src={courseMap[courseName]} alt="Nature Photo"/>
        </div>
    );
}

export default Course;