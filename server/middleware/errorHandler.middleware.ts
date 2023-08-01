import { HttpError } from "http-errors";
import { serverConfig } from "../server-config";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (error: HttpError, req: Request, res: Response, next: NextFunction) => {
    //* Handle HTTP errors created by http-errors package
    if (error.status && error.statusCode && error.expose) {
        res.status(error.status).json({
            data: null,
            error: {
                errorCode: error.status,
                message: error.message,
                stackTrace:
                    serverConfig.ENVIRONMENT === "PRODUCTION" ? null : error.stack,
            },
        });
    } else {
        //* Handle other types of errors
        res.status(500).json({
            data: null,
            error: {
                errorCode: 500,
                message:
                    serverConfig.ENVIRONMENT === "PRODUCTION"
                        ? "Internal Server Error"
                        : error.message,
                stackTrace:
                    serverConfig.ENVIRONMENT === "PRODUCTION" ? null : error.stack,
            },
        });
        next(error);
    }
}