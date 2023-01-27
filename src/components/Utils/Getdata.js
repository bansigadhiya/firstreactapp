const Getdata = () => {
    const data = localStorage.getItem("EmployeeCrud");
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }
}

export default Getdata;