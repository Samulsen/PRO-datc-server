import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Property, PropertyDocument } from 'src/private/tags/tags.schema';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property.name, 'dictDB')
    private propertyModel: Model<PropertyDocument>,
  ) {}

  createProperty() {}
  updateProperty() {}
  deleteProperty() {}
  getPropertyCollection() {}
}
