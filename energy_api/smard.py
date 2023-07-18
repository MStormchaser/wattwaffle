import time
from deutschland import smard
from pprint import pprint
from deutschland.smard.api import default_api
from deutschland.smard.model.indices import Indices
from deutschland.smard.model.time_series import TimeSeries

# Defining the host is optional and defaults to https://www.smard.de/app
# See configuration.py for a list of all supported configuration parameters.
configuration = smard.Configuration(
    host="https://www.smard.de/app/chart_data"
)


# Enter a context with an instance of the API client
with smard.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)
    # int | Mögliche Filter:   * `1223` - Stromerzeugung: Braunkohle   * `1224` - Stromerzeugung: Kernenergie   * `1225` - Stromerzeugung: Wind Offshore   * `1226` - Stromerzeugung: Wasserkraft   * `1227` - Stromerzeugung: Sonstige Konventionelle   * `1228` - Stromerzeugung: Sonstige Erneuerbare   * `4066` - Stromerzeugung: Biomasse   * `4067` - Stromerzeugung: Wind Onshore   * `4068` - Stromerzeugung: Photovoltaik   * `4069` - Stromerzeugung: Steinkohle   * `4070` - Stromerzeugung: Pumpspeicher   * `4071` - Stromerzeugung: Erdgas   * `410` - Stromverbrauch: Gesamt (Netzlast)   * `4359` - Stromverbrauch: Residuallast   * `4387` - Stromverbrauch: Pumpspeicher   * `4169` - Marktpreis: Deutschland/Luxemburg   * `5078` - Marktpreis: Anrainer DE/LU   * `4996` - Marktpreis: Belgien   * `4997` - Marktpreis: Norwegen 2   * `4170` - Marktpreis: Österreich   * `252` - Marktpreis: Dänemark 1   * `253` - Marktpreis: Dänemark 2   * `254` - Marktpreis: Frankreich   * `255` - Marktpreis: Italien (Nord)   * `256` - Marktpreis: Niederlande   * `257` - Marktpreis: Polen   * `258` - Marktpreis: Polen   * `259` - Marktpreis: Schweiz   * `260` - Marktpreis: Slowenien   * `261` - Marktpreis: Tschechien   * `262` - Marktpreis: Ungarn   * `3791` - Prognostizierte Erzeugung: Offshore   * `123` - Prognostizierte Erzeugung: Onshore   * `125` - Prognostizierte Erzeugung: Photovoltaik   * `715` - Prognostizierte Erzeugung: Sonstige   * `5097` - Prognostizierte Erzeugung: Wind und Photovoltaik   * `122` - Prognostizierte Erzeugung: Gesamt
    filter = 1223
    # int | Muss dem Wert von \"filter\" entsprechen. (Kaputtes API-Design)
    filter_copy = 1223
    # str | Land / Regelzone / Marktgebiet:   * `DE` - Land: Deutschland   * `AT` - Land: Österreich   * `LU` - Land: Luxemburg   * `DE-LU` - Marktgebiet: DE/LU (ab 01.10.2018)   * `DE-AT-LU` - Marktgebiet: DE/AT/LU (bis 30.09.2018)   * `50Hertz` - Regelzone (DE): 50Hertz   * `Amprion`- Regelzone (DE): Amprion   * `TenneT` - Regelzone (DE): TenneT   * `TransnetBW` - Regelzone (DE): TransnetBW   * `APG` - Regelzone (AT): APG   * `Creos` - Regelzone (LU): Creos  (default to "DE")
    region = 'DE'
    # str | Muss dem Wert von \"region\" entsprechen. (Kaputtes API-Design)
    region_copy = 'DE'
    # str | Auflösung der Daten:   * `hour` - Stündlich   * `quarterhour` - Viertelstündlich   * `day` - Täglich   * `week` - Wöchentlich   * `month` - Monatlich   * `year` - Jährlich  (default to "hour")
    resolution = "day"
    timestamp = 1  # int |

    try:
        # Zeitreihendaten
        api_response = api_instance.filter_region_filter_copy_region_copy_resolution_timestamp_json_get(
            filter=filter, region=region, resolution=resolution, timestamp=timestamp, filter_copy="", region_copy="")
        pprint(api_response)
    except smard.ApiException as e:
        print("Exception when calling DefaultApi->chart_data_filter_region_filter_copy_region_copy_resolution_timestamp_json_get: %s\n" % e)
