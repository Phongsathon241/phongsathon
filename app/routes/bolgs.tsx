function MyBolgs () {
    //var ใช้งานได้ทั้งหมด
    var title = "XXX";
    var description = "....Yyy";
    var rating = 5;
    let enabled = true;
    
    //ดึงมาตรวจสอบ
    //alert("Title: "+ title);
    console.log("Rating: "+rating);
    
    return (
        <div className="m-3">
            <p>หัวข้อ: {title}</p>
            <p><strong>รายละเอียด</strong>: {description}</p>
        </div>


    );
}
export default MyBolgs;