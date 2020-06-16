const nameList = ['George', 'Mike', 'Patricia'];
for (let i=0; i < 3; i++){
    const newname = prompt('Enter Name')
    nameList.push(newname)
}
for (let i=0; i<nameList.length; i++){
    console.log(nameList[i])
}
