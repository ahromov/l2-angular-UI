export class CommonStatisticDto {

    public accCount?: CharacterCountDto
    public countAll?: CharacterDto
    public countClans?: string
    public countAllys?: string

}

export class CharacterDto {

    public all?: string
    public nobles?: string
    public heroes?: string
    public gms?: string

}

export class CharacterCountDto {

    public count?: string

}