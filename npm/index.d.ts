declare module '@apiverve/markdowntohtml' {
  export interface markdowntohtmlOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface markdowntohtmlResponse {
    status: string;
    error: string | null;
    data: MarkdowntoHTMLData;
    code?: number;
  }


  interface MarkdowntoHTMLData {
      html:           string;
      markdownLength: number;
      htmlLength:     number;
  }

  export default class markdowntohtmlWrapper {
    constructor(options: markdowntohtmlOptions);

    execute(callback: (error: any, data: markdowntohtmlResponse | null) => void): Promise<markdowntohtmlResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: markdowntohtmlResponse | null) => void): Promise<markdowntohtmlResponse>;
    execute(query?: Record<string, any>): Promise<markdowntohtmlResponse>;
  }
}
