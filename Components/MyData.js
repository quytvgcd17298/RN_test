const myData = [
    {
    id:'01',
    Fname:'Luke',
    data:{role: "footballer RB", note:"nothing"},
    children:[{
        id:'01A',
        Fname:'Luke Shaw',
        data:{role: "footballer RB", note:"level up"},
        children:[{
            id:'01AA',
            Fname:'Luke Shaw England',
            data:{role:'footballer RB', note:"nothing"}
        }]
    }]},
    {
    id:'02',
    Fname:'CR7',
    data:{role: "footballer CF", note:"ManU GG"},
    children:[{
        id:'02A',
        Fname:'Ronaldo',
        data:{role: "footballer CF", note:"ManU GG,GG"},
    }]},
    {
    id:'03',
    Fname:'Fred',
    data:{role: "footballer CAM", note:"/FF"},
    children:[{
        id:'03A',
        Fname:'Mc Tom',
        data:{role: "footballer CDM", note:"ManU GG,GG"},
    }]},
    {
    id:'04',
    Fname:'Harry',
    data:{role:"", note:""},
    }
]
export default myData