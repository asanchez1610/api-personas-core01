export const ctts = {
    db: {
        url: 'URL_MONGO_DB',
        cnxName:'DATABASE_CONNECTION',
        models: {
            persona: {
                provide: 'PERSONA_MODEL',
                className: 'Persona'
            }
        }
    },
    jwt: {
        secret: ''
    }
}; 