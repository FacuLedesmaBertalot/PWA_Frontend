import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { InfiniteScrollTrigger } from "./InfiniteScrollTrigger";

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe("InfiniteScrollTrigger", () => {
  let mockIntersectionCallback;
  let observeMock;
  let disconnectMock;

  beforeEach(() => {
    observeMock = vi.fn();
    disconnectMock = vi.fn();

    window.IntersectionObserver = class {
      constructor(callback) {
        mockIntersectionCallback = callback;
      }
      observe = observeMock;
      disconnect = disconnectMock;
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
    delete window.IntersectionObserver;
  });

  it("no renderiza el texto de carga si loading es false", () => {
    render(<InfiniteScrollTrigger onTrigger={vi.fn()} loading={false} />);
    expect(screen.queryByText("infiniteScroll.loading")).not.toBeInTheDocument();
  });

  it("renderiza el texto de carga si loading es true", () => {
    render(<InfiniteScrollTrigger onTrigger={vi.fn()} loading={true} />);
    expect(screen.getByText("infiniteScroll.loading")).toBeInTheDocument();
  });

  it("llama a onTrigger cuando el elemento entra en pantalla y no está cargando", () => {
    const onTriggerMock = vi.fn();
    render(<InfiniteScrollTrigger onTrigger={onTriggerMock} loading={false} />);

    mockIntersectionCallback([{ isIntersecting: true }]);

    expect(onTriggerMock).toHaveBeenCalledTimes(1);
  });

  it("NO llama a onTrigger si el elemento entra en pantalla pero ESTÁ cargando", () => {
    const onTriggerMock = vi.fn();
    render(<InfiniteScrollTrigger onTrigger={onTriggerMock} loading={true} />);

    mockIntersectionCallback([{ isIntersecting: true }]);

    expect(onTriggerMock).not.toHaveBeenCalled();
  });
});