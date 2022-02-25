import {Request,Response} from "express";

class InitControllers {
    static async get(req : Request,res : Response) {
        console.log(req.originalUrl);
        
        res.send('send data here')
    }

    static async post(req : Request,res : Response) {
        
        res.send('send data here')
    }

    static async put(req : Request,res : Response) {
        
        res.send('send data here')
    }

    static async delete(req : Request,res : Response) {
        
        res.send('send data here')
    }

    static async getDetail(req : Request,res : Response) {
        
        res.send('send data here')
    }

    static async postDetail(req : Request,res : Response) {
        
        res.send('send data here')
    }

    static async putDetail(req : Request,res : Response) {
        
        res.send('send data here')
    }

    static async deleteDetail(req : Request,res : Response) {
        
        res.send('send data here')
    }
}

export default InitControllers