import express from "express";
import axios from "axios";

const app = express();



// GET => cannot send body as the second argument, second argument is for headers
async function mainPost() {
    const res = await axios.post(
        "https://httpdump.app/dumps/f554bca6-460c-4c9d-9b6e-51f8c731a7da?a=2&b=45",
        { username: "rwd", password: "1234" },
        {
            headers: {
                Authorization: "Bearer 1234567890",
                "Content-Type": "application/json",
            },
        }
    );

    console.log(res.data);
}



async function mainPost() {
    const res = await axios.get(
        "https://httpdump.app/dumps/f554bca6-460c-4c9d-9b6e-51f8c731a7da?a=2&b=45",
        {
            headers: {
                Authorization: "fbfdebadfnen",
                "Content-Type": "application/json",
            },
        }
    );

    console.log(res.data);
}




// POST => cannot send body as the second argument, second argument is for headers
//POST => for fetch

async function mainPost() {
    const res = await fetch(
        "https://httpdump.app/dumps/f554bca6-460c-4c9d-9b6e-51f8c731a7da",
        { method: "GET" },
        {
            headers: {
                Authorization: "Bearer 1234567890",
                "Content-Type": "application/json",
            },
        }
    );

    const data = await res.json();
    console.log(data);
}
mainPost();
