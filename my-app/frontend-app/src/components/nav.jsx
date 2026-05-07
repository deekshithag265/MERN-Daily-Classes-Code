const Nav=()=>{ //s-2: function Nav() {}, s-3 const Nav=function() {})
    return(
        <nav style={{backgroundColor:"pink", height:"90px"}}>
            <ol style={ListStylings.orderList}>
                <li style={ListStylings.list}>Home</li>
                <li style={ListStylings.list}>Login</li>
                <li style={ListStylings.list}>Register</li>
                <li style={ListStylings.list}>About</li>
            </ol>
        </nav>
    )
}

const ListStylings={  //declaring the stylings
    list:{
        backgroundColor:"powderblue",
        padding:"10px 20px",
        fontSize:"20px",
        fontStyle:"italic",
        fontWeight:"bold",
        borderRadius:"10px",
        cursor:"pointer",

    },
    orderList:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        height:"80px",
        
    }
}

export default Nav;