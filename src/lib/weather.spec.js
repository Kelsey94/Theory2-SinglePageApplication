import { http, HttpResponse } from "msw";
import { server } from "@test/msw/server";
import {
  getWeatherForProfile,
  getWeatherLocationFromProfile,
} from "./weather";

describe("getWeatherLocationFromProfile", () => {
  it("prefers weather.location when provided", () => {
    const profile = {
      weather: { location: "  Tokyo  "},
      timeZone: { zone: "America/Edmonton" },
      contacts: { location: "Italy" },
    };

    expect(getWeatherLocationFromProfile(profile)).toBe("Tokyo");
  });

  //TODO: add more tests
}
);