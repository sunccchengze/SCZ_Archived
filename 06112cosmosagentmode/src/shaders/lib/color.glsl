// =============================================================================
// color.glsl — Color science helpers
// -----------------------------------------------------------------------------
// Blackbody radiation approximation (for physically-plausible star colors),
// ACES filmic tonemapping, and small utility curves.
// =============================================================================

// Blackbody color from temperature in Kelvin (approx, normalized).
// Mitchell Charity's CIE-based polynomial fit, simplified for realtime use.
vec3 blackbody(float tempK) {
  float t = clamp(tempK, 1000.0, 40000.0) / 100.0;
  float r, g, b;

  // Red
  if (t <= 66.0) {
    r = 1.0;
  } else {
    r = t - 60.0;
    r = 1.29293618606 * pow(r, -0.1332047592);
    r = clamp(r, 0.0, 1.0);
  }

  // Green
  if (t <= 66.0) {
    g = t;
    g = 0.39008157876 * log(g) - 0.63184144378;
  } else {
    g = t - 60.0;
    g = 1.12989086089 * pow(g, -0.0755148492);
  }
  g = clamp(g, 0.0, 1.0);

  // Blue
  if (t >= 66.0) {
    b = 1.0;
  } else if (t <= 19.0) {
    b = 0.0;
  } else {
    b = t - 10.0;
    b = 0.54320678911 * log(b) - 1.19625408914;
    b = clamp(b, 0.0, 1.0);
  }

  return vec3(r, g, b);
}

// ACES filmic tonemap (Narkowicz fit) — cinematic shoulder & toe.
vec3 acesFilmic(vec3 x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

// sRGB OETF
vec3 toSRGB(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

// Soft saturation control around luma.
vec3 saturation(vec3 c, float s) {
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  return mix(vec3(l), c, s);
}
