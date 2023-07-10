import React from 'react';
import { Cards } from "../../components/Cards"

export const Card = () => {
        const cardsList = [
            {
                text: "First Box",
                imageSrc: "https://images.unsplash.com/photo-1681068420510-cb528c65d595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
                buttonText: "14/4/2020",
                imageAlt: "This is the first box",
            },
            {
                text: "Second Box",
                imageSrc: "https://plus.unsplash.com/premium_photo-1669061499959-6e4051478d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                buttonText: "14/4/2022",
                imageAlt: "This is the Second box",
            },
            {
                text: "Third Box",
                imageSrc: "https://images.unsplash.com/photo-1681404913428-afd15d644d97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                buttonText: "14/4/2021",
                imageAlt: "This is the Fourth box",
            },
            {
                text: "Fourth Box",
                imageSrc: "https://plus.unsplash.com/premium_photo-1669061499959-6e4051478d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                buttonText: "14/4/2022",
                imageAlt: "This is the Second box",
            },
            {
                text: "Fifth Box",
                imageSrc: "https://images.unsplash.com/photo-1681404913428-afd15d644d97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                buttonText: "14/4/2021",
                imageAlt: "This is the Fourth box",
            },
        ]

        console.log("listofarray", cardsList)

    return(
        <>
        <h1>Cards</h1>
        <div className="CardsContainerList">
         {
             cardsList.map((item, index)=>{
                 console.log("index", index)
                 console.log("item", item)
                 return(
                    <Cards key={index} imageSrc={item.imageSrc} text={item.text} buttonText={item.buttonText} />
                )
             }
             )
         }
         </div>
        </>
    )
}