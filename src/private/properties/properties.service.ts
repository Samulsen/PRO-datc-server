import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Property,
  PropertyDocument,
} from 'src/private/properties/properties.schema';

@Injectable()
export class PropertiesService {
  //   constructor(
  //     @InjectModel(Property.name) private propertyModel: Model<PropertyDocument>,
  //   ) {}

  createProperty() {
    // const myTestObject = new this.propertyModel({ name: 'MyTestString' });
    // return myTestObject.save();
  }
  getPropertyCollection() {
    return 'myCollection';
  }
  updateProperty() {}
  deleteProperty() {}
}
