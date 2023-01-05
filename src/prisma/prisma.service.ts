import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: 'mongodb+srv://dngigi:tomato30@cluster0.udbf48v.mongodb.net/test'
                },
            },
        });
    }
}
