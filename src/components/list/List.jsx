import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import { useRef ,useState} from 'react'
import ListItem from './ListItem';
import './list.scss' 

export default function List () {


    const [slideNumber,setSlideNumber]=useState(0)

    const listRef=useRef(null);
    const[isMoved,setIsmoved]=useState(false);
    const listRefContainer=useRef(null);

    const handleClick=(direction)=>{

        setIsmoved(true);
        // let distance=listRef.current.getBoundingClientRec().x;
            let prevLeft=listRef.current.style.left;
            prevLeft=parseInt(prevLeft);

            let boxw=listRef.current.children[0].clientWidth;
            let listW=listRef.current.clientWidth;
            let containerW=listRefContainer.current.clientWidth;
           // console.log("con ww=>",containerW,"listw=>",listW);
            
            if(listRef.current!=null && listRef.current!=undefined 
                && direction==="left" && slideNumber > 0 ){
                
                 setSlideNumber(slideNumber-1);
                let newLeft=prevLeft+boxw;
                listRef.current.style.left=newLeft+"px";
            // console.log(listRef.current);
            }
            if( listRef.current!=null && listRef.current!=undefined 
                &&  direction==="right" && (prevLeft> containerW-listW)  ){
                    setSlideNumber(slideNumber+1);
                    let newLeft=prevLeft-boxw;
                    listRef.current.style.left=newLeft+"px";
            }
    }

    return (
          <div className="list">
              <span className="listTitle">
                  Continue to watch
              </span>
              
              <div className="wrapper">
                  <ArrowBackIosNewOutlined 
                  className="sliderArrow left" 
                  onClick={()=>handleClick("right")} />

                  <div className="container" ref={listRefContainer}>
                      <div className="absoluteContainer"  ref={listRef} style={{left:0}}>
                      <ListItem value="1" />
                      <ListItem  value="2"/>
                      <ListItem  value="3" />
                      <ListItem  value="4" />
                      <ListItem  value="5" />
                      <ListItem  value="6" />
                      <ListItem  value="7"/>
                      <ListItem  value="8" />
                      <ListItem  value="9" />
                      <ListItem  value="1"/>
                      <ListItem  value="1"/>
                      <ListItem  value="1" />
                      <ListItem  value="1"/>
                      </div>
                  </div>
                  <ArrowForwardIosOutlined 
                  className='sliderArrow right' 
                  style={{display:!isMoved && "none" }} 
                   onClick={()=>handleClick("left")} />
              </div>
          </div>

        )
}



