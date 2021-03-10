export class Forms {
  constructor(
    public name: string,
    public furigana: string,
    public email: string,
    public content: string,
    public tel?: string
  ){}
}

export const formsContent: Forms[] = [
  {
    name: '山内廉',
    furigana: 'やまうちれん',
    email: 'yamaren@nodetech.sub.jp',
    tel: '000-0000-0000',
    content: 'こんにちは！\n私はやまれんです。',
  }
]
