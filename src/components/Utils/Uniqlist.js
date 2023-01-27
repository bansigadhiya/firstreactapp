export const UniqData = (data,key) => {
    console.log("data",data);
    console.log("key",key);

    let uniq = data.map((d) => {
        console.log("d",d[key]);

        return d[key]
    })
    console.log("uniq",uniq);

    let RemoveDublicate = uniq.filter((data,id) => {

        return uniq.indexOf(data) == id;
    })
    return RemoveDublicate;
}