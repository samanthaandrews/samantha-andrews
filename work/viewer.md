---
title: "Viewer: Web App for Viewing and Analyzing Geospatial Data"
description: "Building an interactive web application for visualizing and analyzing satellite imagery and geospatial datasets"
previewImage: "https://via.placeholder.com/290x225"
date: "2018"
section: "UX Design & Frontend Engineering at Descartes Labs"
layout: layouts/project.njk
---

**Role:** UX Designer & Frontend Engineer  
**Company:** Descartes Labs  
**Timeline:** 2018-2021  
**Team:** 2-3 frontend engineers, applied scientists, product

---

## Overview

Descartes Labs scientists used APIs to process satellite imagery through machine learning - detecting agricultural changes, predicting crop yields, monitoring environmental shifts. But sharing results required programmatic API access, creating a barrier for customers and sales demonstrations.

I designed and built a web-based viewer enabling scientists and customers to visualize processed imagery, compare temporal data, and interactively adjust visualization parameters without writing code. Unlike traditional desktop GIS software that runs locally, the browser-based approach made collaboration seamless: scientists could share maps via URL, making it easy for remote teams and customers to view results without software installation.

---

## My Role

I was both UX designer and frontend engineer on this project, working with 1-2 other frontend engineers and applied scientists.

**As designer:** Conducted user research with scientists, created wireframes in Balsamiq, mockups in Figma, and iterated based on feedback  
**As engineer:** Built the React/TypeScript application, built Redux state management, integrated Mapbox GL

---

## Technical Challenge: State Management

The biggest challenge was keeping Mapbox GL's internal state synchronized with React. Maps are stateful (viewport, zoom, layers) and Mapbox GL manages this internally, separate from React's component state.

**Solution:** Redux as single source of truth. All state changes went through Redux first, then we imperatively updated Mapbox GL. This prevented conflicts and enabled features like map state serialization for sharing.

---

## Key Features

**Multi-source data loading:** GeoJSON upload, custom URLs, or search Descartes Labs data catalog

**Layer management:** Toggle visibility, adjust opacity, reorder layers, export, share entire maps (initially via URL parameters, evolved as state grew more complex)

**RGB band stretching:** Scientists could adjust visualization parameters directly in the UI. This made an API call to reprocess imagery, but enabled real-time exploration without returning to code.

**Layer preview:** View layers before adding them to the map - critical for scientists to verify data looked correct

[Screenshot placeholders: Catalog search, layer controls, band stretching interface]

---

## Design Process

**Initial wireframes:** I designed layer addition as a modal dialog - a standard pattern for "add new item" workflows.

**Problem discovered:** Scientists pointed out the modal covered the map, preventing them from seeing layer previews. Since preview was critical for verifying data, this defeated the purpose.

**Solution:** Redesigned as a slide-out panel from the left layers panel, keeping the map visible.

**Bigger discovery:** I assumed scientists wanted a _viewer_ for already-processed data. User research revealed they wanted to continue _editing_ - tweaking visualization parameters without returning to code. This led to adding "edit and analyze" tools in a right panel.

**Final layout:** Three-panel design inspired by Figma - left for layers, center for map, right for editing tools.

[Screenshot placeholders: Wireframes showing modal → slide-out iteration, final three-panel interface]

---

## Key Takeaways

**State architecture:** Making Redux the single source of truth eliminated synchronization bugs and enabled map sharing

**User research:** Technical users think in data layers and transformations, not screens. Blocking their view (with a modal) blocked their thinking.

**Design assumptions:** The line between "viewer" and "editor" isn't clear - users wanted to fluidly move between viewing and tweaking data

**Sales impact:** The only non-API product became critical for demos, making the platform's capabilities tangible to non-technical decision-makers

---

## Impact

Became Descartes Labs' primary sales demo tool - the only product accessible to non-technical decision-makers. Enabled interactive demonstrations of platform capabilities during sales calls, helping close deals by making complex satellite imagery processing tangible and visual.

---

## Tech Stack

React, TypeScript, Redux, Mapbox GL JS
