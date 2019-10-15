import { createParamDecorator } from "@nestjs/common";

export const Persona = createParamDecorator((data, req) => {
    if(Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        return data ? req.query[data] : req.query;
    }else{
        return data ? req.body[data] : req.body;
    }
    
});