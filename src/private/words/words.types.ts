import { MTag } from 'src/private/tags/tags.schema';

export enum EWordType {
  NOUN = 'NOUN',
  VERB = 'VERB',
  ADJECTIVE = 'ADJECTIVE',
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
  tags?: MTag[];
};
