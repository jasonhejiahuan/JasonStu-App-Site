const lensData = [
  {
    id: "iobluetooth",
    label: "IOBluetooth",
    providerID: "public.iobluetooth",
    operation: "read · observe · sample",
    observations: [
      ["connection.connected", "true", "Available"],
      ["bluetooth.paired", "true", "Available"],
      ["battery.level", "0.72", "Available"],
      ["radio.rssi", "−52 dBm", "Available"],
    ],
  },
  {
    id: "corehid",
    label: "CoreHID / IOHID",
    providerID: "public.corehid",
    operation: "read · observe",
    observations: [
      ["framework.coreHIDAvailable", "true", "Available"],
      ["connection.present", "true", "Available"],
      ["connection.connected", "true", "Available"],
      ["input.reports", "—", "Not opened by LinkScope"],
    ],
  },
  {
    id: "coreaudio",
    label: "Core Audio",
    providerID: "public.coreaudio",
    operation: "read · observe",
    observations: [
      ["audio.deviceAlive", "true", "Available"],
      ["audio.transportType", "Bluetooth", "Available"],
      ["audio.defaultOutput", "false", "Available"],
      ["audio.defaultInput", "—", "Device did not report"],
    ],
  },
];

export function ProviderLens() {
  return (
    <figure className="provider-lens" aria-labelledby="provider-lens-caption">
      <div className="window-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <strong>Accessory Inspector</strong>
      </div>

      <fieldset>
        <legend>Select a public provider lens</legend>
        <div className="lens-controls">
          {lensData.map((lens, index) => (
            <span key={lens.id}>
              <input
                type="radio"
                name="provider-lens"
                id={`lens-${lens.id}`}
                value={lens.id}
                defaultChecked={index === 0}
              />
              <label htmlFor={`lens-${lens.id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {lens.label}
              </label>
            </span>
          ))}
        </div>

        <div className="lens-content">
          {lensData.map((lens) => (
            <section className={`lens-panel lens-panel-${lens.id}`} key={lens.id}>
              <header>
                <div>
                  <p className="lens-provider-name">{lens.label}</p>
                  <p className="technical-copy">{lens.providerID}</p>
                </div>
                <p className="lens-state"><span aria-hidden="true" /> Running</p>
              </header>
              <p className="technical-copy">{lens.operation}</p>
              <div className="observation-table" role="table" aria-label={`${lens.label} representative observations`}>
                <div className="observation-heading" role="row">
                  <span role="columnheader">Parameter</span>
                  <span role="columnheader">Raw value</span>
                  <span role="columnheader">Availability</span>
                </div>
                {lens.observations.map(([parameter, value, availability]) => (
                  <div className="observation-row" role="row" key={parameter}>
                    <span role="cell">{parameter}</span>
                    <span role="cell">{value}</span>
                    <span role="cell">{availability}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </fieldset>
      <figcaption id="provider-lens-caption">
        Explanatory reconstruction with representative, privacy-safe values.
        Parameter paths and availability language come from the current app.
      </figcaption>
    </figure>
  );
}

