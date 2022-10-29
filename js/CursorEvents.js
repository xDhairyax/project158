AFRAME.registerComponent("cursor-listener",{
    schema:{
        item_id:{default:"",type:"string"}
    },

    init:function(){
        this.handleMouseEnter()
        this.handleMouseLeave()
    },

    handlePlacesList:function(){
        const id=this.el.getAttribute("id")
        const posterid=["thor","avengers","justice-league","xmen"]
        if(posterid.includes(id)){
            const posterContainer=document.querySelector("#poster-container")
            posterContainer.setAttribute("cursor-listener",{
                item_id:id,
            })
            this.el.setAttribute("material",{
                color:"red",
                opacity:1
            })
        }
    },

    handleMouseEnter:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesList()
        })
    },

    handleMouseLeave:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {item_id}=this.data
            if(item_id){
                const el=document.querySelector(`#${item_id}`)
                const id=el.getAttribute("id")
                if(id===item_id){
                    el.setAttribute("material",{
                        color:"white",
                        opacity:1
                    })
                }
            }
        })
    }
})