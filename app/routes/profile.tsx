function MyProfile () {
    return (
        <>
        <div className="border-4 border-color: rgb(67 56 202) text-center">
            <h1>
             <strong>
                work experience
             </strong>
            </h1>

            <p>
                Name : Phongsathon Thnam<br/>
                ID : 0254545-3    
            </p>
            </div>
            <MyEducation/>        
        </>
    );
}

function MyEducation () {
    return (
        <div>
            <ul>
                <li>Information Thecnology</li>
                <li>Xxx , xxx, 999-999</li>
                <li>Yyy , yyy, 999-999</li>
            </ul>
        </div>
    );

}

export default MyProfile;

