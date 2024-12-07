function MyBolgs () {
    //var ใช้งานได้ทั้งหมด
    var title = "XXX";
    var description = "....Yyy";
    var rating = 5;
    let enabled = true;
    const p1 = 2.14;
    //ดึงมาตรวจสอบ
    //alert("Title: "+ title);
    console.log("Rating: "+rating);

    //Arrow function
    const getRating = () => {
        return <span>&#11088;&#11088;&#11088;&#11088;&#11088;</span>
    }

    const getRating2 = (r) => {
        
        let msg = ''
        for(let i = 0; i < r ; i++){
            msg = msg + '\u2B50'         
        }
        return <span>{msg}</span>;
        //return <span>&#11088;&#11088;&#11088;&#11088;&#11088;</span>
    }
    
    function Comment ({avatar,message,author,top}) {
        return (
            <div>
                <GetTop top={top} />
                <img 
                src={avatar}
                title={author}
                width={300}
                /><br />
                <p>{message}</p>
                <i>{author}</i>
            </div>
    
        );
    }
    
    return (
        <div className="m-3">
            <h1 className="text-lg font-bold">สถานที่ท่องเที่ยว</h1>
            <p><strong>หัวข้อ: </strong>{title}</p>
            <p><strong>รายละเอียด</strong>: {description}</p>
            <p><strong>ชื่นชอบ</strong>: {getRating2(rating)}</p>
            <p><strong>อื่นๆ</strong>: ....</p> <br />
            <h1 className="text-lg font-bold">สถานที่ท่องเที่ยว</h1> 
            <br />

            <Comment
            avatar="public\Immage\ลุง.jpg"
            message="สวัสดี"
            author="Phongsathon"
            top={true}
            /> 
            <br />

            <Comment
            avatar="public\Immage\ลุง.jpg"
            message="สวัสดี"
            author="Phongsathon"
            top={false}
            />
            <br />
        </div>
    )
}


function GetTop ({ top }) {
    if (top)
        return '\u2764';
    return '';
}

export default MyBolgs; 