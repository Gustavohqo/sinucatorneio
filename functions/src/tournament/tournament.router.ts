import { Router } from "express";

const tournamentRouter = Router();

const tournaments = [
  {
    code: "11AA22BB",
    name: "1 Torneio de Sinuca Siteware",
    estilo: "DUO",
    participantes: [
      { name: "Buxin", level: "MEDIO" },
          { name: "Crazy", level: "MEDIO" },
          { name: "Iarly", level: "MEDIO" },
          { name: "Band", level: "ALTO" },
          { name: "Ladeira", level: "MEDIO" },
          { name: "Evy", level: "ALTO" },
          { name: "Jean", level: "BAIXO" },
          { name: "Samuel", level: "BAIXO" }
    ],
    status: "REGISTERING"
  }
];

tournamentRouter.get("/", (req: any, res: any) => {
  const code: string = req.query.code;
  let tournament = tournaments.filter( t => t.code === code);

  if(tournament && tournament[0]) {
    res.send(tournament[0]);
  }
  else {
    console.log(`404; NOT_FOUND; Tournament not found for code ${code}`);
    res.sendStatus(404);
  }
});

export { tournamentRouter };
