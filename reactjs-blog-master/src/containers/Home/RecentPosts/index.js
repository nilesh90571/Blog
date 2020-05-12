import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1200/https://familyapp.com/wp-content/uploads/big-family-life-tips-and-ideas-for-organizing-a-large-family.jpg"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Life of Big family</span>
                <h2>Families photo To a Fit Life</h2>
                <span>posted on May 12, 2020</span>
                <p>This helps you not to lose your mind while trying to remember everything. Plus, it makes communication easier. Mom is often the one person that gets asked where everything is or which event takes place when. So having everything written out, and put in a central place- whether it’s an online spreadsheet or family message bord, can be really helpful!!!!!!!</p>

                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts