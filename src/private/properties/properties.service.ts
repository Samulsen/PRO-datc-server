import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertiesService {
  createProperty() {}
  getPropertyCollection() {
    return 'myCollection';
  }
  updateProperty() {}
  deleteProperty() {}
}
