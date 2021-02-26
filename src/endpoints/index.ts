import express from 'express';
import { AsyncRouter } from 'express-async-router';
import { createProxyRequest } from '../controllers/index';

const createEndpoints = () => {
    const router = AsyncRouter();
    router.get('/', express.json(), createProxyRequest());
    return router;
};

module.exports = createEndpoints;