<<<<<<< HEAD:src/api/private/words/models/words.types.ts
import { Tag } from 'src/api/private/tags/models/tags.schema';
=======
import { Tag } from "src/api/tags/models/tags.schema";
>>>>>>> development:apps/server/src/api/words/models/words.types.ts

export enum EWordType {
  NOUN = "NOUN",
  VERB = "VERB",
  ADJECTIVE = "ADJECTIVE",
}

type ExampleVisual = {
  html: string;
  css: string;
};

export type MWordEntry = {
  title: string;
  description: string;
  examples?: { code?: string; visual?: ExampleVisual };
  links?: string[];
  tags?: Tag[];
};
