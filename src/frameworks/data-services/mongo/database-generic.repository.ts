import { Model } from 'mongoose';
import { IGenericRepository } from '../../../core/abstracts/base/generic.repository';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
    private _repository: Model<T>;
    private _populateOnFind: string[];

    constructor(repository: Model<T>, populateOnFind: string[] = []) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }

    getAll(): Promise<T[]> {
        return this._repository.find().populate(this._populateOnFind).exec();
    }

    get(id: any): Promise<T> {
        return this._repository.findById(id).populate(this._populateOnFind).exec() as Promise<T>;
    }

    async create(item: T): Promise<T> {
        try {
            const createdItem = await this._repository.create(item);
            return createdItem;
        } catch (error) {
            throw new Error(error);
        }
    }

    update(id: string, item: T) {
        return this._repository.findByIdAndUpdate(id, item);
    }
}
