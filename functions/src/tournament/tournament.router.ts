import { Router } from "express";

const tournamentRouter = Router();

const tournaments = [
  {
    code: "11AA22BB",
    name: "1 Torneio de Sinuca Siteware",
    estilo: "DUO",
    participantes: [
      "Buxin",
      "Crazy",
      "Iarly",
      "Band",
      "Ladeira",
      "Evy",
      "Jean",
      "Samuel"
    ],
    status: "REGISTERING"
  }
];

tournamentRouter.get("/", (req: any, res: any) => {
  const code: string = req.query.code;
  let tournament = tournaments.filter( t => t.code === code);

  if(tournament && tournament[0]) {
    res.send(tournament);
  }
  else {
    console.log(`404; NOT_FOUND; Tournament not found for code ${code}`);
    res.sendStatus(404);
  }
});

export { tournamentRouter };
