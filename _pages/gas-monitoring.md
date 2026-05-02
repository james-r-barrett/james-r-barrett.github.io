---
layout: single
title: "Lab Gas Monitoring"
permalink: /gas-monitoring/
author_profile: true
---

This page provides access to the real-time gas monitoring dashboard for the Mackinder Lab growth chambers. The system continuously measures CO₂ (and O₂ on selected chambers) using a network of ESP32-based sensors connected to a central Raspberry Pi hub.

<div style="margin: 20px 0;">
  <a href="https://jamesrbarrett.grafana.net/public-dashboards/2842727a8849425480e023f71c46eba7" 
     target="_blank" 
     rel="noopener noreferrer"
     style="display: inline-block; background: #e8530a; color: white; padding: 12px 24px; 
            border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 1em;">
    Open Live Dashboard ↗
  </a>
</div>

The dashboard shows up to 14 days of historical data across all active sensors. It is hosted on Grafana Cloud and requires no login to view.

## About the system

- **CO₂ sensors** use SenseAir K30 NDIR sensors — accurate, long-lived optical sensors that do not require periodic replacement.
- **O₂ sensors** (selected chambers) use DFRobot SEN0322 electrochemical sensors.
- Readings are pushed automatically to the dashboard every 5 seconds (default interval, configurable per sensor).
- Data is stored indefinitely on each sensor's local SD card in monthly CSV files, independent of the dashboard.

## Notes for lab members

The dashboard link opens in a new tab. If the dashboard shows no data for a sensor, the most likely cause is that the sensor has lost its connection to the Raspberry Pi hub — check that the Pi is powered on and that the sensor's indicator light is active.

For calibration procedures, sensor settings, or downloading raw CSV data, connect directly to the individual sensor's WiFi network and navigate to `192.168.4.1`. Full documentation is available from the lab.