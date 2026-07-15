declare module '@apiverve/markdowntohtml' {
  export interface markdowntohtmlOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface markdowntohtmlResponse {
    status: string;
    error: string | null;
    data: MarkdowntoHTMLData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface MarkdowntoHTMLData {
      html:           null | string;
      markdownLength: number | null;
      htmlLength:     number | null;
  }

  export default class markdowntohtmlWrapper {
    constructor(options: markdowntohtmlOptions);

    execute(callback: (error: any, data: markdowntohtmlResponse | null) => void): Promise<markdowntohtmlResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: markdowntohtmlResponse | null) => void): Promise<markdowntohtmlResponse>;
    execute(query?: Record<string, any>): Promise<markdowntohtmlResponse>;
  }
}
