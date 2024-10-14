export default function Card({children}){

    const cardStyle ={
        border:'1px solid #ccc' ,
        borderRadius : '10px',
        padding:'16px',
        margin:'16px',
        backgroundColor:'#f9f9f9'
    }
    
    return (
        <div style={cardStyle}>
            {children}
        </div>
    )
}