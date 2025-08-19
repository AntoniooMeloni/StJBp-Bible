import { format } from 'date-fns';

const saints = {
    "01-01": { name: "Santa Maria, Mãe de Deus", description: "Solenidade da Maternidade Divina de Maria.", image_slug: "SANTA_MARIA_MAE_DE_DEUS" },
    "01-20": { name: "São Sebastião", description: "Mártir e protetor contra a peste e a guerra.", image_slug: "SAO_SEBASTIAO" },
    "03-19": { name: "São José", description: "Esposo da Virgem Maria e pai adotivo de Jesus.", image_slug: "SAO_JOSE" },
    "04-23": { name: "São Jorge", description: "Mártir e soldado romano, padroeiro de muitas nações.", image_slug: "SAO_JORGE" },
    "06-13": { name: "Santo Antônio", description: "Doutor da Igreja, conhecido como o santo casamenteiro.", image_slug: "SANTO_ANTONIO" },
    "06-24": { name: "São João Batista", description: "O precursor de Jesus Cristo.", image_slug: "SAO_JOAO_BATISTA" },
    "07-26": { name: "Sant'Ana e São Joaquim", description: "Pais da Virgem Maria e avós de Jesus.", image_slug: "SANTANA_E_SAO_JOAQUIM" },
    "08-04": { name: "São João Maria Vianney", description: "Padroeiro dos párocos.", image_slug: "SAO_JOAO_MARIA_VIANNEY" },
    "09-29": { name: "São Miguel, São Gabriel e São Rafael", description: "Os Arcanjos.", image_slug: "ARCANJOS" },
    "10-04": { name: "São Francisco de Assis", description: "Fundador da Ordem Franciscana e amante da natureza.", image_slug: "SAO_FRANCISCO_DE_ASSIS" },
    "10-12": { name: "Nossa Senhora Aparecida", description: "Padroeira do Brasil.", image_slug: "NOSSA_SENHORA_APARECIDA" },
    "12-25": { name: "Natal de Nosso Senhor Jesus Cristo", description: "Celebração do nascimento do Salvador.", image_slug: "NATAL_JESUS" },
};

export const getSaintOfTheDay = () => {
    const today = format(new Date(), 'MM-dd');
    return saints[today] || { name: "Solenidade do Dia", description: "Hoje a Igreja celebra uma festa importante. Consulte o calendário litúrgico.", image_slug: "CRUZ" };
};
