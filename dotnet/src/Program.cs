using src.Services;
using src.Repositories;
using Microsoft.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy  =>
                      {
                          policy.WithOrigins("http://localhost:3000").AllowAnyHeader();
                      });
});

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddMvc();
          
builder.Services.AddSingleton<CommentRepository>(); // Add this line to register CommentRepository as a singleton
builder.Services.AddSingleton<CommentService>(); // Add this line to register CommentService as a scoped service

builder.Services.AddSingleton<RecipesRepository>(); // Add this line to register RecipesRepository as a singleton
builder.Services.AddSingleton<RecipesService>(); // Add this line to register RecipesService as a scoped service

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
app.UseMvc();

