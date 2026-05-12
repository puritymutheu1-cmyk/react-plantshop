
import "@testing-library/jest-dom";
import { vi } from "vitest";

global.setFetchResponse = (data) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  );
};