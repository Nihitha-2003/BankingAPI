using BankingAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options => {
    options.AddPolicy("OpenForAll",
       policy => policy.AllowAnyHeader()
       .AllowAnyMethod()
       .AllowAnyOrigin()
    );
});
// Add services to the container.
builder.Services.AddControllers();

// Add EF Core
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Swagger for API testing
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("OpenForAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
